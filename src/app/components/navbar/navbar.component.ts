import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    options: Set<string> = new Set(['sanfransico', 'japan', 'yokohama 1', 'yokohama', 'czech', 'czech repulic']);
    filteredOptions: Set<string> = new Set();
    searchText: string = "";
    selectedIndex = -1;
    optionIndices: Map<string, number> = new Map();

    filterOptions(): void {
        const lowerCaseSearchText = this.searchText.toLowerCase();

        if (lowerCaseSearchText) {
            this.filteredOptions = new Set(
                [...this.options].filter(option =>
                    option.toLowerCase().includes(lowerCaseSearchText)
                )
            );
        } else {
            this.filteredOptions.clear();
        }
    }

    onKeyDown(event: KeyboardEvent) {
        if (this.filteredOptions.size === 0) {
            return;
        }

        let newIndex = this.selectedIndex;

        if (event.key === 'ArrowUp' && newIndex > 0) {
            newIndex--;
        } else if (event.key === 'ArrowDown' && newIndex < this.filteredOptions.size - 1) {
            newIndex++;
        } else if (event.key === 'Enter' && newIndex !== -1) {
            this.selectOption(newIndex);
            return;
        }

        if (newIndex !== this.selectedIndex) {
            this.selectedIndex = newIndex;
        }
    }


    selectOption(ind: number): void {
        const option = [...this.filteredOptions][ind];
        this.searchText = option;
        this.filteredOptions.clear();
        this.selectedIndex = -1;
    }
}
