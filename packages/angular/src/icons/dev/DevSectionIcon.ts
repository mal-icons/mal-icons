import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-section-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSectionIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M258.4 422.3 428 458.5V141.3l-169.6 36zm220.1 102.1L217.8 454V145.5l260.3-70z"}],["path",{"fill":"currentColor","d":"M371.6 0 121.5 90.7v418.6l250 90.7zM166 484.7V115.3l155.5-48v465.4z"}],["path",{"fill":"currentColor","d":"m371.6 153.2 24.6-5.2V97.6l-24.6 6.6zm0 342.3 24.6 6.7v-50.5l-24.6-5.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSectionIcon;
