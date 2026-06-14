import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-lit-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevLitIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m180 360 48.6-83.9 71.7-35.8 120 120L440.5 476 420 600 300 480l-71.4-48z"}],["path",{"fill":"currentColor","d":"M300 480V240l120-120v240zm-240 0 120 120 17.3-113.6L180 360l-70.4 44.5z"}],["path",{"fill":"currentColor","d":"M180 360V120L300 0v240zm240 240V360l120-120v240zM60 480V240l120 120z"}],["path",{"fill":"currentColor","d":"M180 600V360l120 120z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevLitIcon;
