import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrow-align-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowAlignV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 11L7 13H17V11H7Z","fill":"currentColor"}],["path",{"d":"M7.76 18L9.17 16.59L11 18.41V14H13V18.41L14.83 16.59L16.24 18L12 22.24L7.76 18Z","fill":"currentColor"}],["path",{"d":"M16.24 6L14.83 7.41L13 5.59V10H11L11 5.59L9.17 7.41L7.76 6L12 1.76L16.24 6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowAlignV;
