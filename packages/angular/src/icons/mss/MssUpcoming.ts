import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-upcoming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssUpcoming {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-120v-335h271q0 54 37.5 90.5T480-328q54 0 91.5-36.5T609-455h271v335H80Zm60-60h680v-215H656q-18 57-65.5 92T480-268q-63 0-112.5-35T304-395H140v215Zm573-355-43-43 135-135 43 43-135 135Zm-466 0L112-670l43-43 135 135-43 43Zm203-118v-187h60v187h-60ZM140-180h680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssUpcoming;
