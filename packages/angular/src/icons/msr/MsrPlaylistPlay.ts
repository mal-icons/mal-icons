import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-playlist-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPlaylistPlay {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M130-660q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T130-720h413q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T543-660H130Zm0 165q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T130-555h413q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T543-495H130Zm0 165q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T130-390h246q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T376-330H130Zm556 178q-14 11-29 2.75T642-174v-214q0-16.5 15-24.75t29 2.75l144 107q11 8 11 22t-11 22L686-152Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPlaylistPlay;
