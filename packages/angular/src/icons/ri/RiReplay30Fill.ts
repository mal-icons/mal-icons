import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-replay-30-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiReplay30Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12C22 6.48 17.52 2 12 2 8.98 2 6.28 3.34 4.45 5.45L2 3V9H6.75V10H9.37C9.72 10 10 10.28 10 10.63 10 10.97 9.72 11.25 9.37 11.25H7.5V12.75H9.37C9.72 12.75 10 13.03 10 13.38 10 13.72 9.72 14 9.37 14H6.75V15.5H9.37C10.55 15.5 11.5 14.55 11.5 13.38 11.5 12.85 11.31 12.37 11 12 11.31 11.63 11.5 11.15 11.5 10.63 11.5 9.45 10.55 8.5 9.37 8.5H7.5L5.86 6.87C7.33 5.11 9.54 4 12 4 16.42 4 20 7.58 20 12 20 16.42 16.42 20 12 20 7.58 20 4 16.42 4 12H2C2 17.52 6.48 22 12 22 17.52 22 22 17.52 22 12ZM12.5 10.75C12.5 9.37 13.62 8.25 15 8.25 16.38 8.25 17.5 9.37 17.5 10.75V13.25C17.5 14.63 16.38 15.75 15 15.75 13.62 15.75 12.5 14.63 12.5 13.25V10.75ZM15 9.75C14.45 9.75 14 10.2 14 10.75V13.25C14 13.8 14.45 14.25 15 14.25 15.55 14.25 16 13.8 16 13.25V10.75C16 10.2 15.55 9.75 15 9.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiReplay30Fill;
