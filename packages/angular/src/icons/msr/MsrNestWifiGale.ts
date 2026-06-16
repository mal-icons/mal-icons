import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nest-wifi-gale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNestWifiGale {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M164-550h632l-11.74-190H176l-12 190Zm-19 290h671l-15-230H160l-15 230Zm53 90-11-30h-43q-25.81 0-43.41-18.82Q83-237.65 85-264l31-480q2-24 19.1-40 17.1-16 40.9-16h608q23.8 0 40.9 16Q842-768 844-744l31 480q2 26.35-15.59 45.18Q841.81-200 816-200h-43l-11 30H198Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNestWifiGale;
