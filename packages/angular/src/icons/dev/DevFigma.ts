import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-figma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFigma {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M200 600a100 100 0 0 0 100-100V400H200a100 100 0 0 0 0 200"}],["path",{"fill":"currentColor","d":"M100 300a100 100 0 0 1 100-100h100v200H200a100 100 0 0 1-100-100"}],["path",{"fill":"currentColor","d":"M100 100A100 100 0 0 1 200 0h100v200H200a100 100 0 0 1-100-100"}],["path",{"fill":"currentColor","d":"M300 0h100a100 100 0 0 1 0 200H300z"}],["path",{"fill":"currentColor","d":"M500 300a100 100 0 1 1-200 0 100 100 0 0 1 200 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFigma;
