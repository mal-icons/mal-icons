import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wrist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWrist {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-88 248-280H40v-60h232l168 167-71-147h441q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-260H465l19 39q13 26 9.5 54.5T470-118l-30 30ZM40-620v-60h188l53-54q12.8-12.63 29.37-19.31Q326.93-760 345-760h425q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T770-700H353q-9.82 0-18.41 4T318-685l-66 65H40Zm0 140Zm530 75v-60h320q13 0 21.5 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.33T890-405H570Zm0-150v-60h280q13 0 21.5 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.33T850-555H570Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWrist;
