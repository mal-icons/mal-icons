import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-upcoming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoUpcoming {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24 0-42-18t-18-42v-215q0-24 18-42t42-18h211q0 54 37.68 90.5 37.68 36.5 91.5 36.5Q534-328 571.5-364.5T609-455h211q24 0 42 18t18 42v215q0 24-18 42t-42 18H140Zm0-60h680v-215H656q-18 57-65.5 92T480-268q-63 0-112.5-35T304-395H140v215Zm573-355-43-43 135-135 43 43-135 135Zm-466 0L112-670l43-43 135 135-43 43Zm203-118v-187h60v187h-60ZM140-180h680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoUpcoming;
