import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-068",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract068 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v70.5c90.86,0 164.5,73.64 164.5,164.5s-73.64,164.5-164.5,164.5v70.5h470v-70.5c-90.86,0-164.5-73.64-164.5-164.5s73.64-164.5 164.5-164.5v-70.5h-470zm235,43.48c18.87,0 34.08,15.2 34.08,34.08v314.9c0,18.87-15.2,34.08-34.08,34.08s-34.08-15.2-34.08-34.08v-314.9c0-18.87 15.2-34.08 34.08-34.08zm-235,70.21v242.64c66.99,0 121.32-54.32 121.32-121.32s-54.32-121.32-121.32-121.32zm470,0c-66.99,0-121.32,54.32-121.32,121.32s54.32,121.32 121.32,121.32v-242.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract068;
