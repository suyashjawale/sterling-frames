import { Component, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    options: Array<string> = ['sanfransico', 'japan', 'yokohama 1', 'yokohama', 'czech', 'czech repulic'];

    filteredOptions: Array<string> = [];
    searchText: string = "";
    selectedIndex = -1;
    touchStartX: number = -1;
    touchEndX: number = -1;
    loggedIn: boolean = false;
    optionIndices: Map<string, number> = new Map();

    closeOffcanvas: any;

    constructor(private elementRef: ElementRef, private router: Router) { }


    ngOnInit() {
        this.closeOffcanvas = this.elementRef.nativeElement.querySelector('#closeOffcanvas');
    }

    filterOptions(): void {
        const lowerCaseSearchText = this.searchText.toLowerCase();
        this.selectedIndex = -1;
        if (lowerCaseSearchText) {
            this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(lowerCaseSearchText));
        } else {
            this.filteredOptions = [];
        }
    }

    search() {
        if (this.searchText.trim() !== "") {
            this.filteredOptions = [];
            this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
            this.selectedIndex = -1;
        }
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.search();
        }

        if (event.key === 'ArrowUp' && this.filteredOptions.length > 1) {
            this.selectedIndex--;
            this.searchText = this.filteredOptions[this.selectedIndex];
        } else if (event.key === 'ArrowDown' && this.selectedIndex < this.filteredOptions.length - 1) {
            this.selectedIndex++;
            this.searchText = this.filteredOptions[this.selectedIndex];
        }
    }


    selectOption(ind: number): void {
        this.searchText = this.filteredOptions[ind];
        this.search();
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.touches[0].clientX;
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent) {
        this.touchEndX = event.touches[0].clientX;
    }

    @HostListener('touchend')
    onTouchEnd() {
        if (this.touchStartX - this.touchEndX > 50) {
            this.closeOffcanvas.click();
        }
    }

}
