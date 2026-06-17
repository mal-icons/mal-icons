import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHive {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M196 16s-60 20.07-60 45h-15c-33.24 0-60 20.07-60 45 0 11.5 5.61 22.06 15 30-33.24 0-60 30.92-60 60s26.76 45 60 45h30.47C111.15 160.25 153.63 93.33 211 69.91V16h-15zm105 0v53.91c57.37 23.42 99.84 90.34 104.53 171.09H436c33.24 0 60-15.91 60-45s-26.76-60-60-60c9.39-7.94 15-18.5 15-30 0-24.93-26.76-45-60-45h-15c0-24.93-60-45-60-45h-15zm-44.16 105a30 30 0 0 0-30.87 29.97 30 30 0 0 0 60 0A30 30 0 0 0 256.84 121zm0.5 90.06a45 45 0 0 0-46.31 44.97 45 45 0 0 0 90 0 45 45 0 0 0-43.69-44.97zM151.84 226a30 30 0 0 0-30.87 29.97 30 30 0 0 0 60 0A30 30 0 0 0 151.84 226zm210 0a30 30 0 0 0-30.87 29.97 30 30 0 0 0 60 0A30 30 0 0 0 361.84 226zM76 271c-33.24 0-60 15.92-60 45s26.76 60 60 60c-9.39 7.94-15 18.5-15 30 0 24.93 26.76 45 60 45h15c0 24.93 60 45 60 45h15v-53.91c-57.37-23.42-99.84-90.34-104.53-171.09H76zm329.53 0c-4.68 80.75-47.16 147.67-104.53 171.09V496h15s60-20.07 60-45h15c33.24 0 60-20.07 60-45 0-11.5-5.61-22.06-15-30 33.24 0 60-30.91 60-60s-26.76-45-60-45h-30.47zm-148.69 60a30 30 0 0 0-30.87 29.97 30 30 0 0 0 60 0A30 30 0 0 0 256.84 331z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHive;
