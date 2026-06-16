import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-energy-program-time-used",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEnergyProgramTimeUsed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M410-450ZM110-90q-24.75 0-42.37-17.62T50-150v-600q0-24.75 17.63-42.37T110-810h340q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T450-750H110v600h600v-260q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T770-410v260q0 24.75-17.62 42.38T710-90H110Zm133.82-432Q231-522 222.5-513.37T214-492v215q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T274-277v-215q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62Zm166-131Q397-653 388.5-644.37T380-623v346q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T440-277v-346q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62Zm166 258Q563-395 554.5-386.37T546-365v88q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T606-277v-88q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62ZM730-500q-31 0-59.5-10.5T616-538l-21 20q-9 8-21 8.5t-21-8.5q-9-9-9-21t9-21l22-22q-16-24-25.5-51.32Q540-660.65 540-690q0-78.85 55.58-134.43Q651.15-880 730-880h190v190q0 78.85-55.57 134.43Q808.85-500 730-500Zm0-60q54.17 0 92.08-37.92Q860-635.83 860-690v-130H730q-54.17 0-92.08 37.92Q600-744.17 600-690q0 17 4.5 33.5T616-623l115-115q9-9 21-9t21 9q9 9.07 9 21.53Q782-704 773-695L659-581q17 8 34.5 14.5T730-560Zm-15-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEnergyProgramTimeUsed;
