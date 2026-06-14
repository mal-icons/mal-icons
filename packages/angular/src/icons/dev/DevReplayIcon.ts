import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-replay-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevReplayIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M272.2 117.4 75.7 3.8a28 28 0 0 0-42 24.3v227.3a28 28 0 0 0 42 24.3L272.2 166a28 28 0 0 0 0-48.6m0 316.6L75.7 320.3a28 28 0 0 0-42 24.3V572a28 28 0 0 0 42 24.3l196.5-113.6a28 28 0 0 0 0-48.6m280.2-158.3L355.9 162.1a28 28 0 0 0-42 24.3v227.3a28 28 0 0 0 42 24.3l196.5-113.7a28 28 0 0 0 0-48.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevReplayIcon;
