import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-apollographql",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiApollographql {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,0C5.37,0 0,5.37 0,12 0,18.63 5.37,24 12,24 18.63,24 24,18.63 24,12A12.01,12.01 0 0 0 23.53,8.66 0.6,0.6 0 0 0 22.4,9.07H22.4C22.66,10.01 22.8,10.99 22.8,12A10.73,10.73 0 0 1 19.64,19.64 10.73,10.73 0 0 1 12,22.8 10.73,10.73 0 0 1 4.36,19.64 10.73,10.73 0 0 1 1.2,12 10.73,10.73 0 0 1 4.36,4.36 10.73,10.73 0 0 1 12,1.2C14.58,1.2 17.01,2.1 18.96,3.74A1.47,1.47 0 1 0 19.82,2.9 11.95,11.95 0 0 0 12,0ZM10.56,5.88 6.36,16.78H8.99L9.68,14.93H13.65L12.93,12.89H10.31L12.01,8.2 15.04,16.78H17.67L13.47,5.88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiApollographql;
