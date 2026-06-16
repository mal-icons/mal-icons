import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMap {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72Zm-34-75v-505l-196-66v505l196 66Zm60 0 142-47v-512l-142 54v505Zm-458-12 142-54v-505l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMap;
