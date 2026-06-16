import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-heart-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHeartMinus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-497Zm0 376-99-91q-94-86-152.5-145.5T97-462q-33-45-45-83t-12-80q0-91 61-153t149-62q57 0 105.5 26.5T440-736q41-53 88-78.5T630-840q88 0 148.5 62T839-625q0 29-5.5 54.5T820-530h-64q8-17 15.5-44.5T779-625q0-64-43.5-109.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-65 0-107.5 44T100-625q0 36 12.5 70t49 80Q198-429 265-364t175 164q32-29 60.5-54t56.5-49l6.5 6.5q6.5 6.5 14.5 14t14.5 14l6.5 6.5q-27 24-56 49t-62 55l-41 37Zm160-289v-60h320v60H600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHeartMinus;
