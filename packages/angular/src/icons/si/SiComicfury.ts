import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-comicfury",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiComicfury {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m0 6.96 1.9-3.26 2.73 2.74 2.97-0.2L9.3 3.3l2.21 2.69 8.65-0.250.41-1.08L24 5.13v5.27l-11.25 3.53-1.08 6.78H0V6.96zm2.19-0.75L1.04 8.14l1.75 1.75 1.13-1.95-1.73-1.73zm7.41-0.45L8.48 7.55l1.22 1.6 1.14-1.77-1.24-1.61zm3.9 3.75-1.990.351 2.031-2.37zm3.32-0.56-1.990.351 2.031-2.37zm3.23-0.61-1.990.351 2.031-2.37zm3.18-0.57-1.990.351 2.031-2.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiComicfury;
