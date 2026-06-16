import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-play-for-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPlayForWork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 6v4.59H8.71c-0.45 0-0.670.54-0.350.85l3.29 3.29c0.20.20.510.20.71 0l3.29-3.29a0.50.5 0 0 0-0.35-0.85H13V6c0-0.55-0.45-1-1-1s-1 0.45-1 1zm-3.9 8c-0.61 0-1.110.55-0.99 1.15C6.65 17.91 9.08 20 12 20s5.35-2.09 5.89-4.85c0.12-0.6-0.38-1.15-0.99-1.15-0.49 0-0.880.35-0.980.83C15.53 16.64 13.93 18 12 18s-3.53-1.36-3.91-3.17c-0.1-0.48-0.5-0.83-0.99-0.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPlayForWork;
