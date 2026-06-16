import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-signal-wifi-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSignalWifiOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m703-343-41-41 210-210q-87-68-184.5-107T480-740q-40 0-78.5 5T326-719l-49-49q49-16 99.5-24t103.5-8q137 0 259 53t221 147L703-343ZM480-202l96-96-372-372q-30 16-59 35t-57 41l392 392ZM837-37 617-257 480-120 0-600q36-35 75.5-64t82.5-52L37-837l43-43L880-80l-43 43ZM494-552Zm-104 68Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSignalWifiOff;
