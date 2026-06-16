import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-library-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLibraryMusic {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M486-333q41 0 70-28.42T585-431v-252h116v-60H545v237q-11-9-26.32-14-15.32-5-32.68-5-39.06 0-66.03 27.37t-26.97 67Q393-391 419.97-362T486-333ZM200-200v-680h680v680H200Zm60-60h560v-560H260v560ZM80-80v-680h60v620h620v60H80Zm180-740v560-560Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLibraryMusic;
