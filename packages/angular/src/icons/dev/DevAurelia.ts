import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-aurelia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAurelia {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M393 115.9 337.1 153 280 67l55.6-37.2z"}],["path",{"fill":"currentColor","d":"m438.2 374.2 95.1 142.5L420 592.4l-95.2-142.6-16.6-24.9 113.4-75.6z"}],["path",{"fill":"currentColor","d":"m295.4 469.4 21 31.4-86.3 57.6-37.5-56.3 18.8-12.5 67.4-45z"}],["path",{"fill":"currentColor","d":"m485.3 306.8 24.2-16.2 37.6 56.3-55.7 37.1-21-31.3 31.5-21zm-14.9 45.9-16.6-25 31.5-21 16.6 25z"}],["path",{"fill":"currentColor","d":"M94.8 314.8 76 327.4l-57.4-86 86.3-57.5L145 244l17.1 25.7z"}],["path",{"fill":"currentColor","d":"m305 174.6-113.4 75.6-17.1-25.7L80.2 83.3 193.6 7.6 287.8 149z"}],["path",{"fill":"currentColor","d":"m368.7 132-31.5 21-17.1-25.6L279.9 67l55.6-37.2 57.4 86z"}],["path",{"fill":"currentColor","d":"m228 514.4-16.6-24.8 67.4-45 16.6 24.8z"}],["path",{"fill":"currentColor","d":"m470.4 352.7-16.6-25 31.5-21 16.6 25z"}],["path",{"fill":"currentColor","d":"m94.8 314.8-17.1-25.7 67.4-45 17.1 25.7z"}],["path",{"fill":"currentColor","d":"m337.2 153-17.1-25.6 31.5-21 17.1 25.6z"}],["path",{"fill":"currentColor","d":"m438.2 374.2-113.4 75.6-16.6-24.9 113.4-75.6z"}],["path",{"fill":"currentColor","d":"m287.8 148.9 17.2 25.7-113.4 75.6-17.1-25.7z"}],["path",{"fill":"currentColor","d":"m62.7 128.3 21.4 32L52 181.9l-21.4-32z"}],["path",{"fill":"currentColor","d":"m178.2 512.6 21.4 32.1-32 21.4-21.5-32z"}],["path",{"fill":"currentColor","d":"M93.9 545 0 403 501.6 67.7 600 207.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAurelia;
