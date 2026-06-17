import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-087",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract087 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v71.68h71.68v-71.68h-71.67zm104.58,0v71.68h260.85v-71.68h-260.85zm293.75,0v71.68h71.68v-71.68h-71.67zm-398.32,104.58v260.85h71.68v-260.85h-71.67zm104.58,0v260.85h31.87c2.67-45.88 36.67-83.25 80.93-91.21v-78.43c-44.25-7.96-78.26-45.33-80.93-91.21h-31.87zm228.98,0c-2.67,45.88-36.67,83.25-80.93,91.21v78.43c44.25,7.96 78.26,45.33 80.93,91.21h31.87v-260.85h-31.87zm64.77,0v260.85h71.68v-260.85h-71.67zm-398.32,293.75v71.68h71.68v-71.67h-71.67zm104.58,0v71.68h260.85v-71.67h-260.85zm293.75,0v71.68h71.68v-71.67h-71.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract087;
