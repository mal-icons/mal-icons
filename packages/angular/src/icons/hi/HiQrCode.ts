import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-qr-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiQrCode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 4.88c0-0.620.5-1.12 1.13-1.12h4.5c0.62 0 1.130.5 1.13 1.13v4.5c0 0.62-0.5 1.13-1.12 1.13h-4.5A1.13 1.13 0 0 1 3.75 9.38v-4.5ZM3.75 14.63c0-0.620.5-1.12 1.13-1.12h4.5c0.62 0 1.130.5 1.13 1.13v4.5c0 0.62-0.5 1.13-1.12 1.13h-4.5a1.13 1.13 0 0 1-1.12-1.12v-4.5ZM13.5 4.88c0-0.620.5-1.12 1.13-1.12h4.5c0.62 0 1.130.5 1.13 1.13v4.5c0 0.62-0.5 1.13-1.12 1.13h-4.5A1.13 1.13 0 0 1 13.5 9.38v-4.5Z"}],["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6.75 6.75h0.75v0.75h-0.75v-0.75ZM6.75 16.5h0.75v0.75h-0.75v-0.75ZM16.5 6.75h0.75v0.75h-0.75v-0.75ZM13.5 13.5h0.75v0.75h-0.75v-0.75ZM13.5 19.5h0.75v0.75h-0.75v-0.75ZM19.5 13.5h0.75v0.75h-0.75v-0.75ZM19.5 19.5h0.75v0.75h-0.75v-0.75ZM16.5 16.5h0.75v0.75h-0.75v-0.75Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiQrCode;
