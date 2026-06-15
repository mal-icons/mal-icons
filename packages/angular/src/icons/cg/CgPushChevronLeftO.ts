import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-push-chevron-left-o",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPushChevronLeftO {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 16H8V8H10V16Z","fill":"currentColor"}],["path",{"d":"M15.3 7.76L16.71 9.17L13.88 12L16.71 14.83L15.3 16.24L11.05 12L15.3 7.76Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1C5.92 1 1 5.92 1 12ZM3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPushChevronLeftO;
