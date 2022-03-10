import { Pipe, PipeTransform } from '@angular/core';
import { CodeTablesService } from '../services/code-tables.service';

@Pipe({ name: 'tableCode' })
export class ExponentialStrengthPipe implements PipeTransform {

    constructor(private codeTablesService: CodeTablesService) {

    }

    transform(value: number, tableId: number): string {
        return this.codeTablesService.getByType(tableId).filter(v => v.id == value)[0].description;
    }
}