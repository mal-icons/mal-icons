import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-disc-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDiscLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 4.58V12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C12.35 9 12.69 9.06 13 9.17V2.05C18.05 2.55 22 6.81 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.81 5.95 2.55 11 2.05V4.06C7.05 4.55 4 7.92 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 8.64 17.93 5.77 15 4.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDiscLine;
