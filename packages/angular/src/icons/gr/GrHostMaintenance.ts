import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-host-maintenance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHostMaintenance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M14,23 L20,17 M21,14 C19.9,14 19,14.9 19,16 C19,17.1 19.9,18 21,18 C22.1,18 23,17.1 23,16 M17,4 L18,4 L18,5 L17,5 L17,4 Z M10,23 L3,23 L3,1 L3,1 L21,1 L21,11 M3,13 L17,13 M3,18 L13,18 M3,8 L21,8"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHostMaintenance;
