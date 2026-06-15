import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-thermostat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgThermostat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 19C12.55 19 13 18.55 13 18C13 17.45 12.55 17 12 17C11.45 17 11 17.45 11 18C11 18.55 11.45 19 12 19Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 14C16.21 14.91 17 16.36 17 18C17 20.76 14.76 23 12 23C9.24 23 7 20.76 7 18C7 16.36 7.79 14.91 9 14V4C9 2.34 10.34 1 12 1C13.66 1 15 2.34 15 4V14ZM13 4V15.17C14.17 15.58 15 16.69 15 18C15 19.66 13.66 21 12 21C10.34 21 9 19.66 9 18C9 16.69 9.83 15.58 11 15.17V4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgThermostat;
