import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-stethoscope-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStethoscopeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 3V5H6V9C6 11.21 7.79 13 10 13C12.21 13 14 11.21 14 9V5H12V3H15C15.55 3 16 3.45 16 4V9C16 11.97 13.84 14.44 11 14.92L11 16.5C11 18.43 12.57 20 14.5 20C16 20 17.27 19.06 17.77 17.74C16.73 17.27 16 16.22 16 15C16 13.34 17.34 12 19 12C20.66 12 22 13.34 22 15C22 16.37 21.08 17.53 19.82 17.89C19.21 20.25 17.06 22 14.5 22C11.46 22 9 19.54 9 16.5L9 14.92C6.16 14.44 4 11.97 4 9V4C4 3.45 4.45 3 5 3H8ZM19 14C18.45 14 18 14.45 18 15C18 15.55 18.45 16 19 16C19.55 16 20 15.55 20 15C20 14.45 19.55 14 19 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStethoscopeLine;
