import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-stepsize-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStepsizeIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M600 156.5 503.8 26.3H228.3l-84.9 262.4L239.6 419l83-262.5zm-239.6 24.6 94.3 130.2-81.1 262.5H96.2L0 443.5h277.4z"}],["path",{"fill":"currentColor","d":"m372.3 575.6-138-0.4L276 443.5z"}],["path",{"fill":"currentColor","d":"m234.4 575.2-138-0.4L138 443zm83-263.5 138 0.4L413.7 444z"}],["path",{"fill":"currentColor","d":"m0 442.6 138 0.5-41.6 131.7zm455.3-130.5-138-0.4L359 179.9z"}],["path",{"fill":"currentColor","d":"m275.9 443.5 138 0.4-41.6 131.7z"}],["path",{"fill":"currentColor","d":"m234.4 575.2 41.5-131.7-138-0.4z"}],["path",{"fill":"currentColor","d":"m275.9 443.5 138 0.4-96.5-132.2z"}],["path",{"fill":"currentColor","d":"m227.6 24.4 138 0.4-41.5 131.7z"}],["path",{"fill":"currentColor","d":"m365.6 24.8 138 0.4L462 157zm-83 263.5-138-0.4 41.6-131.8z"}],["path",{"fill":"currentColor","d":"m600 157.4-138-0.4 41.5-131.8zM144.7 287.9l138 0.4L241 420.1z"}],["path",{"fill":"currentColor","d":"m324.1 156.5-138-0.4 41.6-131.7z"}],["path",{"fill":"currentColor","d":"m324.1 156.5 138 0.4-96.5-132.1z"}],["path",{"fill":"currentColor","d":"m282.6 288.3 41.5-131.7-138-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStepsizeIcon;
