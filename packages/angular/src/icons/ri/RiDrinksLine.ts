import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-drinks-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDrinksLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6.2C5.61 2 5.1 2.42 4.98 3L4.18 7H2V9H4.11L5.48 20.89C5.55 21.52 6.09 22 6.72 22H17.28C17.91 22 18.45 21.52 18.52 20.89L19.89 9H22V7H19.82L19.02 3C18.9 2.42 18.39 2 17.8 2H16V0H14V2ZM17.78 7H6.22L6.82 4H17.18L17.78 7ZM6.12 9H17.88L16.61 20H7.39L6.12 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDrinksLine;
