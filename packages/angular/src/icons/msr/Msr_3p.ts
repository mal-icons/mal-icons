import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-3p",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_3p {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-400h320v-19q0-42-42.5-65T480-507q-75 0-117.5 23T320-419v19Zm160-173q30.53 0 52.26-21.74Q554-616.47 554-647t-21.74-52.26Q510.53-721 480-721t-52.26 21.74Q406-677.52 406-647t21.74 52.26Q449.48-573 480-573ZM240-240 131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240Zm-100-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_3p;
