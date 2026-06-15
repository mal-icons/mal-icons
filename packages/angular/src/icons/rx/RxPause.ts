import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxPause {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.05 2.75C6.05 2.45 5.8 2.2 5.5 2.2C5.2 2.2 4.95 2.45 4.95 2.75V12.25C4.95 12.55 5.2 12.8 5.5 12.8C5.8 12.8 6.05 12.55 6.05 12.25V2.75ZM10.05 2.75C10.05 2.45 9.8 2.2 9.5 2.2C9.2 2.2 8.95 2.45 8.95 2.75V12.25C8.95 12.55 9.2 12.8 9.5 12.8C9.8 12.8 10.05 12.55 10.05 12.25V2.75Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxPause;
