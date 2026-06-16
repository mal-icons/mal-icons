import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-privacy-tip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPrivacyTip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-0.79-0.47-1.51-1.19-1.83l-7-3.11c-0.52-0.23-1.11-0.23-1.62 0l-7 3.11zM12 7c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm0 4c0.55 0 1 0.45 1 1v4c0 0.55-0.45 1-1 1s-1-0.45-1-1v-4c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPrivacyTip;
