import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-person-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPerson3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V18c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-0.78c0-1.12-0.61-2.15-1.61-2.66zM10 12h4c1.66 0 3-1.34 3-3 0-0.73-0.27-1.4-0.71-1.920.13-0.330.21-0.70.21-1.08a3 3 0 0 0-1.86-2.77C14 2.48 13.06 2 12 2s-2 0.48-2.64 1.23A3 3 0 0 0 7.5 6c0 0.380.080.750.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPerson3;
