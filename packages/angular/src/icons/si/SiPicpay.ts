import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-picpay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPicpay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.46 1.59v7.54H24V1.59zm1.26 1.26h5.03v5.03h-5.03zm1.26 1.26v2.51h2.51V4.1zM3.77 5.36V8.53h3.38c2.14 0 3.36 1.04 3.36 2.94 0 1.95-1.22 3.01-3.36 3.01H3.77V8.53H0v13.88h3.77v-4.76h3.57c4.33 0 6.82-2.35 6.82-6.32 0-3.77-2.48-5.98-6.81-5.98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPicpay;
