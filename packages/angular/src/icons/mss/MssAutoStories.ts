import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-auto-stories",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAutoStories {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-160q-48-38-104-59t-116-21q-53 0-114.5 22T40-164v-575q48-29 103-45t117-16q58 0 113.5 15T480-740v506q51-33 107-49.5T700-300q36 0 78.5 7t81.5 29v-505q14 5 31.5 13.5T920-739v575q-44-32-105.5-54T700-240q-60 0-116 21t-104 59Zm60-167v-353l260-260v387L540-327Zm-120 63v-439q-34-19-79-28t-81-9q-47 0-87.5 10T100-704v440q35-17 75.5-26.5T260-300q45 0 85 9.5t75 26.5Zm0 0v-439 439Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAutoStories;
