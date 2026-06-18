import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-forward-10-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiForward10Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12 2 17.52 6.48 22 12 22 17.52 22 22 17.52 22 12H20C20 16.42 16.42 20 12 20 7.58 20 4 16.42 4 12 4 7.58 7.58 4 12 4 14.46 4 16.67 5.11 18.14 6.87L16.14 8.86C15.7 8.48 15.13 8.25 14.5 8.25 13.12 8.25 12 9.37 12 10.75V13.25C12 14.63 13.12 15.75 14.5 15.75 15.88 15.75 17 14.63 17 13.25V10.75C17 10.07 16.73 9.45 16.29 9H22V3L19.55 5.45C17.72 3.34 15.02 2 12 2ZM15.5 10.75V13.25C15.5 13.8 15.05 14.25 14.5 14.25 13.95 14.25 13.5 13.8 13.5 13.25V10.75C13.5 10.2 13.95 9.75 14.5 9.75 15.05 9.75 15.5 10.2 15.5 10.75ZM10 8.5H8.5V15.5H10V8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiForward10Fill;
