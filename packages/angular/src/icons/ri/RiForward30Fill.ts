import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-forward-30-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiForward30Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12C2 6.48 6.48 2 12 2 15.02 2 17.72 3.34 19.55 5.45L22 3V9H16.79C17.23 9.45 17.5 10.07 17.5 10.75V13.25C17.5 14.63 16.38 15.75 15 15.75 13.62 15.75 12.5 14.63 12.5 13.25V10.75C12.5 9.37 13.62 8.25 15 8.25 15.5 8.25 15.96 8.4 16.35 8.65L18.14 6.87C16.67 5.11 14.46 4 12 4 7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12H22C22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12ZM15 9.75C14.45 9.75 14 10.2 14 10.75V13.25C14 13.8 14.45 14.25 15 14.25 15.55 14.25 16 13.8 16 13.25V10.75C16 10.2 15.55 9.75 15 9.75ZM10 13.38C10 13.03 9.72 12.75 9.37 12.75H7.5V11.25H9.37C9.72 11.25 10 10.97 10 10.63 10 10.28 9.72 10 9.37 10H6.75V8.5H9.37C10.55 8.5 11.5 9.45 11.5 10.63 11.5 11.15 11.31 11.63 11 12 11.31 12.37 11.5 12.85 11.5 13.38 11.5 14.55 10.55 15.5 9.37 15.5H6.75V14H9.37C9.72 14 10 13.72 10 13.38Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiForward30Fill;
