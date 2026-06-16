import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAtm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M409-360v-192h-80v-48h208v48h-80v192h-48Zm-329 0v-206q0-15 9.5-24.5T114-600h139q15 0 24.5 9.5T287-566v206h-48v-77H128v77H80Zm48-125h111v-67H128v67Zm458 125v-206q0-15 9.5-24.5T620-600h226q15 0 24.5 9.5T880-566v206h-48v-192h-75v150h-48v-150h-75v192h-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAtm;
