import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-embrassed-energy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEmbrassedEnergy {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M179.81 20.72v81.25L135.78 75.62l17.56 46.94-115.66-20.94 84.72 49.91H20v27.35l110.47 14.88 96.59-29.19c-11.3-11.87-18.59-30.74-18.59-52 0-35.93 20.87-65.06 46.62-65.06 25.75 0 46.63 29.14 46.63 65.06 0 20.85-7.04 39.38-17.97 51.28l99.03 29.91 112.5-15.16V151.53H394.19l84.72-49.9-120.44 21.78 17.87-47.72-48.66 29.13V20.72H179.81zM495.28 223.34l-112.5 22.44-55.4-13.12-28.03 118.31 16.59 145h51.69L329.25 351.22l46.53 27.84-21.31-56.94 124.44 22.5-91.12-53.69h107.5v-67.59zM20 223.75v67.19h108.81l-91.12 53.69L157.31 322.97 136.35 379l38.47-23-28.59 139.97h48.16L207.28 351.56 185.6 232.72l-55.12 13.06L20 223.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEmbrassedEnergy;
