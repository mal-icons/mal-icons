import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-imessage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiImessage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.29 0A5.27 5.27 0 0 0 0 5.29v13.43A5.27 5.27 0 0 0 5.29 24h13.43A5.27 5.27 0 0 0 24 18.72V5.29A5.27 5.27 0 0 0 18.72 0ZM12 4.15a8.81 7.34 0 0 1 8.81 7.34A8.81 7.34 0 0 1 12 18.83a8.81 7.34 0 0 1-2.49-0.3A8.66 7.34 0 0 1 5.93 19.93a9.93 7.34 0 0 0 1.54-2.15 8.81 7.34 0 0 1-4.28-6.28A8.81 7.34 0 0 1 12 4.15"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiImessage;
