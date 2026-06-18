import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-forward-30-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiForward30Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12C2 6.48 6.48 2 12 2 15.27 2 18.18 3.57 20 6L20 3.5H22V9.5H17.17C17.38 9.87 17.5 10.29 17.5 10.75V13.25C17.5 14.63 16.38 15.75 15 15.75 13.62 15.75 12.5 14.63 12.5 13.25V10.75C12.5 9.37 13.62 8.25 15 8.25 15.36 8.25 15.69 8.32 16 8.46V7.5L18.62 7.5C17.18 5.39 14.75 4 12 4 7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12H22C22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12ZM15 9.75C14.45 9.75 14 10.2 14 10.75V13.25C14 13.8 14.45 14.25 15 14.25 15.55 14.25 16 13.8 16 13.25V10.75C16 10.2 15.55 9.75 15 9.75ZM9.37 12.75C9.72 12.75 10 13.03 10 13.38 10 13.72 9.72 14 9.37 14H6.75V15.5H9.37C10.55 15.5 11.5 14.55 11.5 13.38 11.5 12.85 11.31 12.37 11 12 11.31 11.63 11.5 11.15 11.5 10.63 11.5 9.45 10.55 8.5 9.37 8.5H6.75V10H9.37C9.72 10 10 10.28 10 10.63 10 10.97 9.72 11.25 9.37 11.25H7.5V12.75H9.37Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiForward30Line;
