import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-heart-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHeartPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-497Zm0 376-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55Q820-730 832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.07 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47L578-282.5l14.37 14.03L599-262q-27 24-56 49t-62 55l-41 37Zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHeartPlus;
