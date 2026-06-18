import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-group-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGroup2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 19.75V16.4C10 15.12 10.99 14.11 12.47 13.53C11.54 13.19 10.54 13 9.5 13C7.61 13 5.86 13.62 4.45 14.66C5.33 17.15 7.41 19.08 10 19.75ZM18.88 16.09C18.49 15.55 17.17 15 15.5 15C13.49 15 12 15.8 12 16.4V20C14.93 20 17.48 18.43 18.88 16.09ZM9.55 11.5C10.79 11.5 11.8 10.49 11.8 9.25C11.8 8.01 10.79 7 9.55 7C8.31 7 7.3 8.01 7.3 9.25C7.3 10.49 8.31 11.5 9.55 11.5ZM15.5 12.5C16.6 12.5 17.5 11.6 17.5 10.5C17.5 9.4 16.6 8.5 15.5 8.5C14.4 8.5 13.5 9.4 13.5 10.5C13.5 11.6 14.4 12.5 15.5 12.5ZM12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGroup2Fill;
