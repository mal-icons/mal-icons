import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-podium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPodium {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M490-790q0 29-20.5 49.5T420-720q-13 0-24.5-4.5T374-737q-27 16-45 41t-19 56h530l-40 280H626v-60h125q6-40 11.5-80t11.5-80H186q6 40 11.5 80t11.5 80h125v60H160l-40-280h130q1-49 28.5-89t71.5-63q1-29 21-48.5t49-19.5q29 0 49.5 20.5T490-790ZM374-180h212l28-280H346l28 280Zm-54 60-33-334q-2-26 16-46t44-20h266q26 0 44 20t16 46l-33 334H320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPodium;
