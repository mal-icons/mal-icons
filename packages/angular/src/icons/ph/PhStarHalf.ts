import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-star-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhStarHalf {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M234.5,114.38,229.27,119a8,8,0,1,1-10.52-12l5.23-4.57s0,0,0-0.07l-8.67-0.75a8,8,0,1,1,1.37-16l8.70.75a16,16,0,0,1,9.11,28.07Zm-60.7,43,2.86,12.41a8,8,0,1,0,15.59-3.6l-2.85-12.47,7.86-6.86a8,8,0,0,0-10.52-12.06l-7.86,6.87A16,16,0,0,0,173.8,157.4ZM136,51.15V184.81l0.270.15,11.88,7.22a8,8,0,0,1-8.3,13.68L128,198.64l-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.07l59.46-5.14,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l10.740.93a8,8,0,0,1-1.38,16l-10.76-0.93a16,16,0,0,1-13.35-9.75ZM119.73,185l0.27-0.15V51.15L104.8,87.37a16,16,0,0,1-13.35,9.75L32,102.25a0.580.58,0,0,0,0,0.1l45.13,39.34A16,16,0,0,1,82.2,157.4L68.68,215.94v0Zm79.91,13.25a8,8,0,0,0-15.59,3.61l3.3,14.14v0l-11.19-6.8a8,8,0,1,0-8.31,13.68l11.23,6.82a16,16,0,0,0,23.84-17.34Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhStarHalf;
