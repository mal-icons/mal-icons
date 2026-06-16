import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-4g-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_4gMobiledata {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 7c-0.55 0-1 0.45-1 1v4H5V8c0-0.55-0.45-1-1-1s-1 0.45-1 1v5c0 0.550.45 1 1 1h3v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H9V8c0-0.55-0.45-1-1-1zm9 5c0 0.550.45 1 1 1h1v2h-5V9h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-3c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_4gMobiledata;
