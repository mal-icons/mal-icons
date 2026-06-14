import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-bubble-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBubbleIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M362.5 155.8c-54 0-107 23.1-147.7 68.6V0h-80.3v377.9a222.1 222.1 0 1 0 444.3 0c0-122.7-93.7-222.1-216.3-222.1m-5.9 358.7a136.6 136.6 0 1 1 0-273.2 136.6 136.6 0 0 1 0 273.2"}],["path",{"fill":"currentColor","d":"M76.2 490.2a55 55 0 1 0 0 109.8 55 55 0 0 0 0-109.9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBubbleIcon;
