import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pin-distance-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPinDistanceFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.39 10.39L7.5 14.28L3.61 10.39C1.46 8.24 1.46 4.76 3.61 2.61C5.76 0.46 9.24 0.46 11.39 2.61C13.54 4.76 13.54 8.24 11.39 10.39ZM7.5 8.5C8.6 8.5 9.5 7.6 9.5 6.5C9.5 5.4 8.6 4.5 7.5 4.5C6.4 4.5 5.5 5.4 5.5 6.5C5.5 7.6 6.4 8.5 7.5 8.5ZM20.39 19.39L16.5 23.28L12.61 19.39C10.46 17.24 10.46 13.76 12.61 11.61C14.76 9.46 18.24 9.46 20.39 11.61C22.54 13.76 22.54 17.24 20.39 19.39ZM16.5 17.5C17.6 17.5 18.5 16.6 18.5 15.5C18.5 14.4 17.6 13.5 16.5 13.5C15.4 13.5 14.5 14.4 14.5 15.5C14.5 16.6 15.4 17.5 16.5 17.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPinDistanceFill;
