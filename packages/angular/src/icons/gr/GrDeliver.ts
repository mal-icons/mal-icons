import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-deliver",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDeliver {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.66,21 9,19.66 9,18 C9,16.34 7.66,15 6,15 C4.34,15 3,16.34 3,18 C3,19.66 4.34,21 6,21 Z M17,21 C18.66,21 20,19.66 20,18 C20,16.34 18.66,15 17,15 C15.34,15 14,16.34 14,18 C14,19.66 15.34,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDeliver;
